"""
Download eCheckbook data, assign custom categories, write each category to it's own `.json` file.
"""
import datetime
import json
import os
from pprint import pprint as print

import requests

from _actg_ln_dscr_categories import ACTG_LN_CATS_TAGGED

CHECKBOOK_ENDPOINT = "https://data.austintexas.gov/resource/8c6z-qnmj.json?$where=dept_cd=87&$limit=999999999"
CUSTOM_CAT_KEY = "category"
OUT_DIR = "_data"

def validate(data):
  # Let's just make sure we have a lot of rows and columns
  if len(data) < 50000:
    raise IOError("insufficient data retrieved from data.austintexas.gov")
  if len(data[0].keys()) < 30:
    raise IOError("insufficient columns found in first row of data.")
  pass

def get_data(endpoint):
    res = requests.get(endpoint)
    res.raise_for_status()
    data = res.json()
    validate(data)
    return data

def assign_cats(data, index=None, key=None):
  for row in data:
    dscr = row.get("actg_ln_dscr")
    if dscr in index:
      row[key] = index[dscr]
    else:
      row[key] = "uncategorized"
  return data

def get_years(first_year=2008):
  current_year = datetime.datetime.now().year
  return [year for year in range(first_year, current_year + 1)]

def group_totals_by_category_year(data, key):
  years = get_years()
  empty_years = {str(year): 0 for year in years}
  cats = list(set([row[key] for row in data]))
  cats_by_year = {cat: dict(empty_years) for cat in cats}
  
  for row in data:
    cat = row[key]
    cal_year = row["cal_year"]
    amount = int(float(row["amount"]))
    cats_by_year[cat][cal_year] += amount
  
  return cats_by_year

def arrayify(data, custom_cat_key):
  rows = []
  for cat in data.keys():
    rows += [{custom_cat_key: cat, "cal_year": cal_year, "total": data[cat][cal_year]} for cal_year in data[cat].keys()]
  return rows


def write(rows, fname):
    with open(fname, "w") as fout:
      fout.write(json.dumps(rows))

def write_totals_by_year(rows):
  fname = f"{OUT_DIR}/category_totals_by_year.json"
  # make jsx easier by assigning the list to a key
  rows = {"rows": rows}
  write(rows, fname)

def write_line_items_by_category(data, key):
  cats = list(set([row[key] for row in data]))

  for cat in cats:
    rows = [row for row in data if row[key] == cat]
    fname = f"{OUT_DIR}/{cat}.json"
    
    with open(fname, "w") as fout:
      fout.write(json.dumps(rows))

def main(endpoint, custom_cat_key):
    cat_index = {row["name"]: row["cat"] for row in ACTG_LN_CATS_TAGGED}
    data = get_data(endpoint)
    data = assign_cats(data, index=cat_index, key=custom_cat_key)
    checkbook_categorized = [row for row in data if row.get(custom_cat_key)]
    totals_by_year_dict = group_totals_by_category_year(checkbook_categorized, custom_cat_key)
    totals_by_year_list = arrayify(totals_by_year_dict, custom_cat_key)

    if not os.path.exists(OUT_DIR):
      os.makedirs(OUT_DIR)

    write_totals_by_year(totals_by_year_list)
    write_line_items_by_category(checkbook_categorized, custom_cat_key)

if __name__ == "__main__":
  main(CHECKBOOK_ENDPOINT, CUSTOM_CAT_KEY)
