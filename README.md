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
* 5: Go to Package.json & modify the script ```[test : ""]``` with
```javascript
    "start": "node server/index.js",
    "dev": "nodemon server/index.js"
```
then save it.

>Creating Server or Backend

* 6: Terminal: ```mkdir server```
* 7: Terminal: ```cd server```
* 8: Terminal: ```touch index.js```
* 9: Go to ```./server/index.js``` & follow the ```comments 13 - 18```
* 19:  Terminal: ```cd ..```
* 20: Terminal: ```npm run dev```
        That will start the server on Port 5000
* 21: Terminal: ```cd server```
* 22: Terminal: ```mkdir routes```
* 23: Terminal: ```cd routes```
* 24: Terminal: ```mkdir api```
* 25: Terminal: ```cd api```
* 26: Terminal: ```touch posts.js```
* 27: Go to ```./server/index.js``` & follow the ```comments 28-29```
* 30: Go to ```./server/api/posts.js``` & follow the ```comments 31-39```
* 40: Terminal: ```npm i -g @vue/cli```
* 41: Terminal: ```posts/touch .gitignore```
* 42: Go to ```.gitignore``` & put files to be ignored.
* 43: Terminal: ```vue create client```
* 44: Terminal: ```git init```
* 45: ```git add .``` && ```git commit -m 'Initial Backend Created'```
* 45.1: Terminal: ```git push -u origin master`

>Creating Client or Frontend

* 46: Go to ```client/src/components/```
* 47: change ```HelloWorld.vue``` to ```ostComponent.vue```
* 48: Go to ```client/src/App.vue```
* 49: change all ```HelloWorld``` to ```PostComponent``` & Save all.
* 50: Terminal: ```cd client```
* 51: Terminal: ```npm run serve```
* 52: Client will be on ```localhost:8080```
* 52.1: Terminal: ```git commit -am "Initial Frontend Created```