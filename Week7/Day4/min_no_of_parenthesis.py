arr = list(input())

class Stack:
    def _init_(self):
        self.items = []
        
    def push(self,data):
        self.items.append(data)
        
    def pop(self):
        return self.items.pop()
    
    def top(self):
        return self.items[-1]
    
    def length(self):
        return len(self.items)
    
    def returnstack(self):
        return self.items

mystack = Stack()
for i in range(0,len(arr)):
    if arr[i] == "(":
        mystack.push(i)
    elif arr[i] == ")":
        if mystack.length() > 0 and arr[mystack.top()] == "(":
            mystack.pop()
        else:
            mystack.push(i)
            
stackarr = mystack.returnstack()
string = ""

for i in range(0,len(arr)):
    if i in stackarr:
        pass
    else:
        string += arr[i]
        
print(string)