# recruitment_portal

### Instruction to import mysql data
1. Open phpmyadmin then create a database named 'recruitment_portal'
2. Select 'recruitment_portal' then run recruitment_portal.sql

### Instruction to run project java spring boot api

1. Run the back end in java which can be run in eclipse. Proceed to import project for maven and run the application as usual

2. Some notes before running the project:

- Need a full environment
- Change some specific config files as follows:

* Change the path to save images or upload files at class: `Constant` in the package` com.myloo.recruitment.common`
* Change the database path and database account, email account at the `application-dev.yml` file in` resouce/config`
   Note that emails that want to be sent must be turned on less secure, because google blocks

### Instruction to run project vuejs

1. Open project with Visual Studio Code
2. Open terminal by 'ctrl + `'
3. Type 'npm install' to install node module library
4. Type 'npm start' to run the vuejs app
