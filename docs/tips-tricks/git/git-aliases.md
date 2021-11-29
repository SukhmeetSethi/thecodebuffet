---
id: git-alias
title: Get more efficient with Git aliases
sidebar_position: 1
sidebar_label: Git Aliases
tags: [git, aliases, developer, github, github aliases]
---

# Get more efficient with Git aliases 

Developers love speed, whether it is about their machine or their dev environments. We often see developers prefer to use keyboard shortcuts instead of mouse to accelerate development. We also see some developers create shell scripts, use shell aliases and many more ways to gain development speed.

I am also one of those who prefer to cut down on extra overheads as much as possible. While I have by-hearted almost all key shortcuts for IntelliJ IDE and can code really fast, I always use to struggle when it comes to checking in code in Git. Now being a stubborn developer, I have never relied on UI based Git tools but have rather preferred command line to work with git. Git tends to be tedious in a way, imagine that you have to issue at least 3 commands to push your changes to remote repo:

```shell
git add .
git commit -m "nice comment"
git push
```

That is lot of typing to commit one small change and a developer may commit lot of times if not pushing the code everytime. Imagine other action like checkout, status, branch, pull, push etc. So many times I have made typos just while issuing specially the checkout, commit and branch command. My thought was, can I gain some efficiency here and that's where I found an option to setup aliases just like you can do it in shell.

## Git aliases

By using git aliases, we can setup shortcuts for git commands and cut down lot of typing. Ultimately that gives us more speed.
Setup is really simple, just issue following command on your favorite git command line:

```shell
git config --global alias.co checkout # for checkout
git config --global alias.cm commit   # for commit

... and so on
```

Now instead of typing *git checkout* and *git commit*, we can rather do this:

```shell
git co master
git cm -m "new comment"
```

## My shortcuts

It's all about your preference how you would like to setup your aliases but I would like to share the scheme I use for aliases. 


:::tip My tip

I prefer all my shortcuts with two letters only : co, cm, st. The only reason I do that because it reduces chances of typo considerably but still gives an option to setup alias for each command. Also, I don't use aliases for all the commands but just limit it to the ones which are frequently used

:::

Here are my aliases:

Command | Alias
----- | ------
checkout | co
commit | cm
status | st
pull | pl
push | ph
branch | br
fetch | ft
stash | sh
add | ad
merge | mg