from http.client import HTTPResponse
from django.shortcuts import render,redirect
from .models import Post
from blog2.forms import CommentsForm

def frontpage(request):
  posts=Post.objects.all()
  return render(request,'blog2/frontpage.html',{"posts":posts})
# Create your views here.


def post_detail(request,slug):
  post=Post.objects.get(slug=slug)
  if request.method=="POST":
    form=CommentsForm(request.POST)
    if form.is_valid():
      comment=form.save(commit=False)
      comment.post=post
      comment.save()
    
    return redirect("post_detail",slug=post.slug)
  else:
    form=CommentsForm()
  
  return render(request,"blog2/post_detail.html",{"post":post,"form":form})



