# Tampermonkey Code
JavaScipt code that runs on [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) on Chrome
or simply [here](https://roytangrb.github.io/FB-Graph-API-Automate/){:target="_blank"}

## Steps
### Method 1
1. Visit Facebook [Graph API Explorer](https://developers.facebook.com/tools/explorer/), login and get an access token(check all boxes containing "posts", "pages", "posts").

2. Visit [repo index page](https://roytangrb.github.io/FB-Graph-API-Automate/)

3. Input as prompts and toggle dev console by ```option + command + J```, wait for a few secs and result should log out

### Method 2
1. Visit Facebook [Graph API Explorer](https://developers.facebook.com/tools/explorer/), login and get an access token(check all boxes containing "posts", "pages", "posts").

2. Add Tampermonkey to chrome, copy and paste the code in "app.js" to create a new script

3. replace "@match" header info with the *url* you want to run the code under, enable the script.

4. Refresh your *url*, the code should run.

5. Input as prompts and toggle dev console by ```option + command + J```, wait for a few secs and result should log out
