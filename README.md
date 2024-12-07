# 5610-Final-Project-node-server

### Second Update(Ziyang Tai)
- Added many more routes and dao for quizzes, questions, attempts and attemptAnswers, all the basic needs are satisfied. 
- Modified bugs through out debugging
- When using this node server, the users, modules and courses folder may cause networking problems because it is not updated. I cannot update it using codes from my own node server, they are not compatible with each other. 
- can be debugged using following urls:

- http://localhose:4000/api/courses/:courseId/quizzes
- http://localhose:4000/api/quizzes/:quizId/publish
- http://localhose:4000/api/quizzes/:quizId/unpublish
- And many more....Check in source code


### First Update(Ziyang Tai)
- Added Quiz folder with quizzes folder, questions folder, attempts folder and attemptAnswers folder, with required dao.js, model.js, routes.js and schema.js files. 
- For each folder, added basic dao and routes, easy to understand and revise later on. 
- Note: I haven't tried the node server with react server yet, since it is connect to my kanbas remote mongodb, the react server may not receive anything because of syntax conflicts or other things. 
- can be debugged using following urls in your localhost://4000: 

- http://localhost:4000/api/quizzes
- http://localhost:4000/api/questions
- http://localhost:4000/api/attempts
- http://localhost:4000/api/attemptAnswers

