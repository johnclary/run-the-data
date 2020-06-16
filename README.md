# Run the Data ✊⚙️

[Run the Data](https://runthedata.io) uses open financial data to provide insight into the way the City of Austin Police Department spends its money.

#### I'm unhappy with the state of policing in Austin. What can I do?

- Attend an Austin DSA meeting
- Vote and volunteer for Jose Garza
- Support and follow the Austin Justice Coalition
- Support and follow Just Liberty
- Tell Mayor and City Council that they should defund the Austin Police Department

*This project is not affiliated with any of these organizations*

#### I'd like to learn more about the City of Austin's budget.

Glad to hear that. A good place to start is the City's Open Budget website.

#### Are there any problems with this data?

Yes, many! As you peruse the site, you'll notice that expenditures are often generic and vague. What the hell are "POLICE SUPPLIES?" Unfortunately, these obscurities reflect the City of Austin's inconsistent procedures when accounting for its expenditures.

#### I'd like to make a suggestion.

Yes, please. DM me on Twitter or open a new issue.

*Site header icons sourced from Yu Luck, MRK, and Gajah Mada Studio via the noun project*

### Data

#### Austin Finance Online eCheckbook

- [Dataset](https://data.austintexas.gov/Budget-and-Finance/Austin-Finance-Online-eCheckbook/8c6z-qnmj/data)

- [Column definitions](https://data.austintexas.gov/Budget-and-Finance/Austin-Finance-Online-eCheckbook-Column-Definition/567b-4d24)

##### Fields

| Name | Description| Example |
|------|------------|---------|
|`fy_dc`| Fiscal Year,Fiscal year is from Oct. 1 - Sep. 30|`2017`|
|`per_cd`| Fiscal Month," Oct is PER_CD = 1, Sept is PER_CD = 12"|`8`|
|`dept_cd`| Department code,A department is a primary organizational unit used by the City of Austin. Examples of various departments are Parks and Recreation and Austin Police Department.|`87`|
|`dept_nm`| Department name,|`Police`|
|`fund_cd`| Fund code,"A fund is a high level chart of accounts structure. Funds help organize the City's finances. Some examples include the General Fund, Drainage Fund, and the Airport Operating Fund."|`1000`|
|`fund_nm`| Fund name,|`General Fund`|
|`div_cd`| Division code / Program Code,"A program is the secondary organizational unit used by the City of Austin. Each department has one or more programs within it. For example, Parks and Recreation have Acquatics, Cultural Arts Services, Facilities Services, etc. A program can be an organizational entity within a department, or an administrative entity in which expenses can be captured and tracked."|`5OPS`|
|`div_nm`| Division name / Program Name,Program Name|`Operations Support`|
|`gp_cd`| Group Code/Activity Code,An activity is a sub-group under programs that further segregates the organization to track the City of Austin's functions and expenses.|`1TAS`|
|`gp_nm`| Group Name/Activity Name,Activity Name|`Air Operations`|
|`ocat_cd`| Object Category,"A category is a high level grouping of expenses. Some examples are Commodities, Contractual Services, and Expense Refunds."|`152`|
|`ocat_nm`| Object Category Name,Object Category Name|`Contractuals`|
|`obj_cd`| Object code,"The identification code associated with an object of expenditure.  Object is a fund accounting Chart of Accounts element.  It is used to describe types of expenses. An expense category describes the types of expenses. For example, Computer Software, Salaries, and Architectural Services."|`6389`|
|`obj_nm`| Object name,The name of the object code|`Maintenance-other equipment`|
|`lgl_nm`| Legal name,The legally defined name of the company or individual.|`AIRBUS HELICOPTERS INC`|
|`vend_cust_cd`| Vendor Customer Code,Vendor identification number with the City.|`VC0000103181`|
|`vend_cust_ind`| Vendor/Customer indicator,"Vendors and Customers are included in the same table - The indicator of ""V"" indicates that this is an approved Vendor."|`V`|
|`rfed_doc_cd`| Referenced document code,"The actual payment document code (This would include Payment Requests-Matching (PRM), General Accounting Expenditure Documents (GAX), etc."|`PRM`|
|`rfed_doc_dept_cd`| Referenced document department code,Department that created the payment document|`8700`|
|`rfed_doc_id`| Referenced document identification number,The actual payment document number|`17050321084`|
|`comm_cd`| Commodity code,A standardized NIGP commodity code which specifies the product ordered|`03535`|
|`comm_dscr`| Commodity description,Commodity Code description of the product ordered.|`Engines and Parts, Helicopter`|
|`chk_eft_iss_dt`| Check issued date,|`0017-05-02T00:00:00.000Z`|
|`cvl_chk_sta_dv`| Check status,"The Check Status for a payment line in the eCheckbook will either show Paid or Outstanding. The City of Austin reconciles and updates their Financial system with the check status from the Bank once per month. Therefore, a check may have actually cleared the bank and may have been paid, but, would still potentially show as Outstanding until the City does their monthly check status update to the Financial System."|`Paid`|
|`rfed_vend_ln_no`| Referenced vendor line number,"Payment requests can contain multiple vendor, commodity and accounting reference lines. Purchase orders refer to a particular line on the payment request."|`1`|
|`rfed_comm_ln_no`| Referenced commodity line number,"A purchase order may have several commodity lines, the referenced line is the one used for this particular payment"|`8`|
|`rfed_actg_ln_no`| Referenced accounting line number,Each commodity line will have an accounting line|`1`|
|`rf_doc_cd`| Referenced document code,"The actual purchase order code that the document references (This would include Purchase Orders (PO), Delivery Orders (DO), and Contracts (CT), etc."|`DO`|
|`rf_doc_dept_cd`| Referenced document department code,"Code for department, i.e. 1100 = Austin Energy"|`8700`|
|`rf_doc_id`| Referenced document identification number,The actual purchase order number|`15122905488`|
|`actg_ln_dscr`| Accounting Line Description,|`Engines and Parts, Helicopter`|
|`amount`| Payment amount,|`227.07`|
|`cal_year`| Calendar Year,Calendar Year is from Jan. 1 - Dec. 31|`2017`|
|`cal_month`| Calendar Month ,|`5`|

#### Purchase Order Quantity Price detail for Commodity/Goods procurements

- [Dataset](https://data.austintexas.gov/Budget-and-Finance/Purchase-Order-Quantity-Price-detail-for-Commodity/3ebq-e9iz)

##### Fields

| Name | Description|Example|
|------|------------|-------|
| `commodity`||`44519`|
| `commodity_description`||`Concrete Tools and Accessories (Not Otherwise Clas`|
| `quantity`||`720.68`|
| `unit_of_measure`||`EA`|
| `unit_of_meas_desc`||`Each`|
| `unit_price`||`1`|
| `itm_tot_am`||`720.68`|
| `contract_name`||`Ace Contractors/Spec Proj/trowels, safety gloves`|
| `purchase_order`||`PO620014060203864`|
| `award_date`||`2014-06-11T00:00:00.000`|
| `vendor_code`||`ACE7163805`|
| `lgl_nm`||`HAVERDA ENTERPRISES INC`|
| `ad_ln_1`||`5005 E BEN WHITE BLVD`|
| `city`||`AUSTIN`|
| `st`||`TX`|
| `zip`||`78741-7301`|
| `ctry`||`US`|
| `data_build_date`||`2020-06-08T00:00:00.00`|

#### Operating Budget

- [Dataset](https://data.austintexas.gov/Budget-and-Finance/Expense-Open-Budget-revised/yeeq-kk6v)


### Attributions

"Data" By Wenjie, KY 
https://thenounproject.com/search/?q=data&i=2921740"Data" By Wenjie, KY 

