import http, { request } from 'http';
import { TodolistService } from './todolist-service.mjs';

const port = 3000;
const host = 'localhost';

const service = new TodolistService();
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (request.method === 'GET') {
    service.getTodoList(request, res);
  } else if (request.method === 'POST') {
    service.createTodo(request, res);
  } else if (request.method === 'PUT') {
    service.updateTodo(request, res);
  } else if (request.method === 'DELETE') {
    service.deleteTodo(request, res);
  }
});

server.listen(port, host, () => {
  console.log(`running at ${host}:${port}`);
});
