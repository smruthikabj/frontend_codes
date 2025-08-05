1\. Initiate a git repository (converting a normal directory into working directory): **git init**

2\. Moving the files from the working directory to the Staging area: 

&nbsp;	a. Add a file to the Staging area: **git add \[file-name.txt]**

	b. Add all new and changed files to the staging area: **git add .**

3\. Moving the files from the Staging area to the Local repository: **git commit -m "Commit message"**

4\. Moving the files from the Local repository to the Remote repository:

&nbsp;	a. Go to GitHub and **Create a new repository**

	b. To push an existing repository from the command line:

&nbsp;		Add a remote repository: **git remote add origin https://github.com/\[username]/\[repository-name].git**

		Rename a local branch: **git branch -M main**

		Push changes to remote repository (and remember the branch): **git push -u origin main**

5\. Remove a file or folder: **git rm -r \[file-name.txt]**

6\. View the remote repository of the currently working file or directory: **git remote -v**

7\. Create a local copy of a remote repository: **git clone ssh://git@github.com/\[username]/\[repository-name].git** 

8\. Check status: **git status**

9\. List branches: **git branch**

10\. List all branches(local and remote): **git branch -a**

11\. Create a new branch: **git branch \[branch name]**

12\. Delete a branch: **git branch -d \[branch name]**

13\. Delete a remote branch: **git push origin --delete \[branch name]**

14\. Create a new branch and switch to it: **git checkout -b \[branch name]**

15\. Clone a remote branch and switch to it: **git checkout -b \[branch name] origin/\[branch name]**

16\. Rename a local branch: **git branch -m \[old branch name] \[new branch name]**

17\. Switch to a branch: **git checkout \[branch name]**

18\. Switch to the branch last checked out: **git checkout -**

19\. Discard changes to a file: **git checkout -- \[file-name.txt]**

20\. Merge a branch into the active branch: **git merge \[branch-name]**

21\. Merge a branch into a target branch: **git merge \[source branch] \[target branch]**

21\. Stash changes in a dirty working directory: **git stash**

22\. Remove all stashed entries: **git stash clear**

23\. Apply latest stash to working directory: **git stash pop**

24\. Push a branch to your remote repository: **git push origin \[branch name]**

25\. Push changes to remote repository (remembered branch): **git push**

26\. Update local repository to the newest commit: **git pull**

27\. Pull changes from remote repository: **git pull origin \[branch name]**

28\. Set a repository's origin branch to SSH: **git remote set-url origin ssh://git@github.com/\[username]/\[repository-name].git**

29\. View changes: **git log**

30\. View changes (detailed): **git log --summary**

31\. View changes (briefly): **git log --oneline**

32\. Preview changes before merging: **git diff \[source branch] \[target branch]**

