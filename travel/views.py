from django.shortcuts import render

from django.shortcuts import render ,redirect ,get_object_or_404
from django.views.generic.base import TemplateView

from django.views.generic import (
    ListView ,DetailView, CreateView, UpdateView ,DeleteView
)



# Create your views here.


class DestinationView(TemplateView):
    template_name = 'bas.html'
    



    #if request.method == "GET":
       # form = PlayersForms()
       # return render(request ,'register.html' ,{'form':form})

    #else:
       # form = PlayersForms(request.POST)
       # print(form)
       # if form.is_valid():
            #print(form.firstname.data)
           # form.save()
         
        #else:
         #   print('invlad data')

        #return redirect('info:home')
    

#def index(request):
 #   form = CustomerForm()

  #  if request.method =='POST':
   #     form =CustomerForm(request.POST)
    ##       form.save()

    #context = {'form':form}
    #return render(request ,'customer.html',context)



#def register(request):
 ##      form = PlayersForm()
   #     return render(request ,'register.html' ,{'form':form})

    #else:

     #   form = PlayersForm(request.POST)
      #  if form.is_valid():
       #     form.save()
        #return redirect('news:home')