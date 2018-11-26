# CRUD-MEVN-Post
```
| CRUD | MEVN | SPA | Post |
| Mongo Db | Express | Vue | Node | npm |
| Create | Read | Update | Delete |
| Single Page Application | Post App | Herok |
```

## Follow the Instruction Below to learn & create your own CRUD-MEVN-Post:

* 1: Create a **New Project** Folder
* 2: Open **Terminal** or **cmd** prompt & ```cd``` into the **New Project** Folder.
* 3: Terminal: ```npm i express cors body-parser mongodb```
* 4: Terminal: ```npm i D nodemon```
* 5: Go to **Package.json** & modify the script ```[test : ""]``` with
```javascript
    "start": "node server/index.js",
    "dev": "nodemon server/index.js"
```
then save it.

>Creating Initial Server or Backend
---

* 6: Terminal: ```mkdir server```
* 7: Terminal: ```cd server```
* 8: Terminal: ```touch index.js```
* 9: Go to ```./server/index.js``` & follow the ```comments 13 - 18```
* 19:  Terminal: ```cd ..```
* 20: Terminal: ```npm run dev```
        That will start the server on ```Port 5000```, 
  - Refer folder/file: ```ScreenShots/1.png```
* 21: Terminal: ```cd server```
* 22: Terminal: ```mkdir routes```
* 23: Terminal: ```cd routes```
* 24: Terminal: ```mkdir api```
* 25: Terminal: ```cd api```
* 26: Terminal: ```touch posts.js```
* 27: Go to ```./server/index.js``` & follow the ```comments 28-29```
* 30: Go to ```./server/api/posts.js``` & follow the ```comments 31-39```
  - Install ```Postman`` & follow folder/file:
    1.  ```ScreenShots/2.png```
    1.  ```ScreenShots/3.png```
    1.  ```ScreenShots/4.png```
    1.  ```ScreenShots/5.png```
    1.  ```ScreenShots/6.png```
    1.  ```ScreenShots/7.png```
* 40: Terminal: ```npm i -g @vue/cli```
* 41: Terminal: ```posts/touch .gitignore```
* 42: Go to ```.gitignore``` & put files to be ignored.
* 43: Terminal: ```vue create client```
* 44: Terminal: ```git commit -am 'Initial Backend Created'```
* 45.1: Terminal: ```git push -u origin master```

>Creating Initial Client or Frontend
---

* 46: Go to ```client/src/components/```
* 47: change ```HelloWorld.vue``` to ```PostComponent.vue```
* 48: Go to ```client/src/App.vue```
* 49: change all ```HelloWorld``` to ```PostComponent``` & Save all.
* 50: Terminal: ```cd client```
* 51: Terminal: ```npm run serve```
* 52.1: Client will be on ```localhost:8080```,
  - follow folder/file: ```ScreenShots/8.png```
* 52.2: Terminal: ```git commit -am 'Initial Frontend Created'```
* 52.3: Terminal: ```git push -u origin master```
 
>Creating CRUD-MEVN-Post Client / Frontend
---

* 53: Stop the **Client** ```http://localhost:8080``` [@Terminal client: **App running..**  
keypress ```ctr+c``` to stop Client]
* 54: Terminal: ```npm i axios```
* 55: Terminal: ```npm run serve```
* 56: create & go to ```client/src/PostService.js``` & follow the ```comments 57 - 65```
* 66: Go to ```client/src/components/PostComponent.vue``` & follow the ```comments 67 - 69```
* 70: In ```/client/src/PostService.js``` remove the **local host link** of the url.
* 71: create & go to ```/client/vue.config.js``` & follow the ```comments 72 - 73```
* 74.1: In client Terminal: ```ctrl + c``` to Stop client
* 74.2: In client Terminal: ```npm run build```
  - follow folder/file: ```ScreenShots/9.png```

>Creating App production ready for Heroku
---

* 75: Handle Production in ```/server/index.js``` follow the ```comments 75.1 - 75.2```
* 76: In **server** Terminal: ```ctrl + c```
* 77.1: Terminal: ```git add .``` && ```git   commit -m 'Added Static folder & prep SPA'```
* 77.2: Terminal: ```git push -u origin master```
* 78: Create Heroku Account & install Heroku
* 79: Terminal: ```heroku login```
* 80: Terminal: ```heroku create```
* 81: Terminal: ```heroku open```
* 82: grab the heroku repository
* 83: Terminal: ```heroku git:remote -a crud-mevn-post```
* 84: Terminal: ```git status```
* 85: Terminal: ```git push heroku master```
* 86: Terminal: ```heroku open```

>Visit the live production site @ https://crud-mevn-post.herokuapp.com/

>Done with production ready Heroku CRUD-MEVN-Post App, Hope I was able to help you with basics of MEVN stack.
---