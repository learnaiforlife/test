from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

todos_db = []
todo_id_counter = 0

class TodoListCreateAPIView(APIView):
    def get(self, request):
        return Response(todos_db)

    def post(self, request):
        global todo_id_counter
        todo_id_counter += 1
        todo = {
            'id': todo_id_counter,
            'title': request.data.get('title'),
            'description': request.data.get('description'),
            'completed': False
        }
        todos_db.append(todo)
        return Response(todo, status=status.HTTP_201_CREATED)

class TodoDetailAPIView(APIView):
    def _get_todo(self, pk):
        try:
            pk = int(pk) # Ensure pk is an integer for comparison
        except ValueError:
            return None
        for todo in todos_db:
            if todo['id'] == pk:
                return todo
        return None

    def get(self, request, pk):
        todo = self._get_todo(pk)
        if todo:
            return Response(todo)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        todo = self._get_todo(pk)
        if todo:
            todo['title'] = request.data.get('title', todo['title'])
            todo['description'] = request.data.get('description', todo['description'])
            todo['completed'] = request.data.get('completed', todo['completed'])
            return Response(todo)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        todo = self._get_todo(pk)
        if todo:
            todos_db.remove(todo)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)
