Method 1: Push master to main (if your remote is also named main)

Switch to your local master branch:
git checkout master 

Ensure your master branch is up to date:
git pull origin master or git pull 

Push the changes from your local master to the remote main branch:
git push origin main 

Method 2: Rename your local master branch and push
If your local master branch has local changes and you want to make it the new main branch, and your remote repository is also named main, you can rename your local branch before pushing.
Rename your local master branch to main:
git branch -m master main 

Push the main branch to the remote repository:
git push -u origin main 

The -u flag is equivalent to --set-upstream, which sets the new branch as the upstream branch.