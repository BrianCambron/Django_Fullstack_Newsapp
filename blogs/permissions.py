from rest_framework import permissions
from rest_framework.exceptions import PermissionDenied

class MyCustomPermission(permissions.BasePermission):

     def has_object_permission(self, request, view, obj):

         if obj.status == 'DFT' or not request.method == 'DELETE':
             return True
         else:
             raise PermissionDenied('request not permitted')
