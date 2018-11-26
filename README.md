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

>Creating Initial Server or Backend
---

* 6: Terminal: ```mkdir server```
* 7: Terminal: ```cd server```
* 8: Terminal: ```touch index.js```
* 9: Go to ```./server/index.js``` & follow the ```comments 13 - 18```
* 19:  Terminal: ```cd ..```
* 20: Terminal: ```npm run dev```
        That will start the server on ```Port 5000```, Screen Shot:
      ![screen shot](/img/1.png "screen shot 1")
* 21: Terminal: ```cd server```
* 22: Terminal: ```mkdir routes```
* 23: Terminal: ```cd routes```
* 24: Terminal: ```mkdir api```
* 25: Terminal: ```cd api```
* 26: Terminal: ```touch posts.js```
* 27: Go to ```./server/index.js``` & follow the ```comments 28-29```
* 30: Go to ```./server/api/posts.js``` & follow the ```comments 31-39```
-- Install Postman & follow Screen Shot 2:
      ![screen shot](/img/2.png "screen shot 1")
-- Screen Shot 3:
      ![screen shot](/img/3.png "screen shot 1")
-- Screen Shot 4:
      ![screen shot](/img/4.png "screen shot 1")
-- Screen Shot 5:
      ![screen shot](/img/5.png "screen shot 1")
-- Screen Shot 6:
      ![screen shot](/img/6.png "screen shot 1")
-- Screen Shot 7:
      ![screen shot](/img/7.png "screen shot 1")
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
* 52.1: Client will be on ```localhost:8080```
-- Screen Shot 8:
      ![screen shot](/img/8.png "screen shot 1")
* 52.2: Terminal: ```git commit -am 'Initial Frontend Created'```
* 52.3: Terminal: ```git push -u origin master```
 