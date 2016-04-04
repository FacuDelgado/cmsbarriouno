# 3pmongoedit
#### A general purpose keystone-based CMS for multiple targets
(each of these target websites has its separate front-end website)

## How to configure a new target

1. Add a target subfolder with the keystone models inside the ./models folder
2. If required, add a target subfolder with the DB-initialisation script inside the ./scripts folder
3. Configure the *target_URI* setting in the .env file (and env-sample.txt)
4. Set the *TARGET* setting to the new target.
5. Set the *BRAND_NAME* setting to the name you want to display in the upper left corner.

#### Sample:
	NODE_ENV=development

	TARGET=starter01
    BRAND_NAME=Reach The Poor

	starter01_URI=mongodb://localhost/3pstarter01
	reachThePoor_URI=mongodb://dbuser:dbuser@ds058048.mongolab.com:58048/rep
	www3p_URI=mongodb://dbuser:dbuser@ds058048.mongolab.com:58048/www3p

## How to edit data

1. Assign the right TARGET= setting in the .env file, run the server.js
2. In the browser go to localhost:3000/keystone

## How to initialise (clean or reset) the DB

Append the target to the script commands, i.e.:

	npm run init-db reachThePoor
	npm run reset-db starter01



