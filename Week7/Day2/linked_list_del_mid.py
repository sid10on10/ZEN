n = int(input())
arr = list(map(int,input().split(" ")))

class Node:
    def _init_(self,data):
        self.data = data
        self.next = None
        
class LinkedList:
    def _init_(self):
        self.head = None
        
    def printList(self):
        outarr = []
        temp = self.head
        while(temp):
            outarr.append(temp.data)
            temp = temp.next
        print(" ".join(list(map(str,outarr))))
    
    def insert(self,data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while(current.next):
                current = current.next
            
            current.next = new_node
            
    
    def deleteMid(self):
        if(self.head is None or self.head.next is None):
            return
        
        slow_ptr = self.head
        fast_ptr = self.head
        prev = None
        while(fast_ptr.next is not None and fast_ptr.next.next is not None):
            fast_ptr = fast_ptr.next.next
            prev = slow_ptr
            slow_ptr = slow_ptr.next
        
        prev.next = slow_ptr.next
        
        
if _name_ == '_main_':
    llist = LinkedList()
    for i in range(0,len(arr)):
        llist.insert(arr[i])
    llist.deleteMid()
    llist.printList()