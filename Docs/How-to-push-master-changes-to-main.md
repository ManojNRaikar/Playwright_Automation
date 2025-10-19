🧭 Step 1: Check your branches

First, check what branches you currently have and where you are:
**git branch**

You’ll see something like:
*** master
  main**
The * shows your current branch (e.g. master).


🧩 Step 2: Switch to the main branch

You need to switch to main to merge the master branch changes into it.

**git checkout main**

If the branch doesn’t exist locally, create it by tracking the remote one:

git checkout -b main origin/main

🔄 Step 3: Merge master into main

Now merge the latest changes from master into main:

**git merge master**

If there are conflicts, Git will show them — resolve them manually in your editor, then:

**git add .
git commit -m "Resolved merge conflicts between master and main"**

🚀 Step 4: Push changes to remote main

Now push your updated main branch to the remote repository:

**git push origin main**

🧹 (Optional) Step 5: Make main your default branch

If you want to use only main going forward (recommended), then:

1.Set main as the default branch on GitHub/GitLab (Repository → Settings → Branches).

2.Locally delete master:

**git branch -d master**


3.Rename main if needed:

**git branch -M main**


4.Set upstream:

**git push -u origin main**

| Step | Command                | Description            |
| ---- | ---------------------- | ---------------------- |
| 1    | `git branch`           | Check branches         |
| 2    | `git checkout main`    | Switch to main         |
| 3    | `git merge master`     | Merge master into main |
| 4    | `git push origin main` | Push changes to remote |
| 5    | *(Optional)*           | Make main default      |


🧭 Goal: Rename master → main and push changes to remote

| Step | Command                                                    | Description                                                                             |
| ---- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 1️⃣  | `git branch`                                               | Check your current branches. Confirm you are on `master`.                               |
| 2️⃣  | `git pull origin master`                                   | Pull the latest changes from remote `master` to ensure your local copy is up to date.   |
| 3️⃣  | `git branch -m master main`                                | Rename your local branch from `master` to `main`.                                       |
| 4️⃣  | `git push -u origin main`                                  | Push the renamed `main` branch to remote and set it as upstream.                        |
| 5️⃣  | *(On GitHub/GitLab UI)* Change default branch to `main`    | Go to your repository → **Settings → Branches → Default branch → Select `main`**.       |
| 6️⃣  | `git push origin --delete master`                          | Delete the old remote `master` branch (after confirming default is switched to `main`). |
| 7️⃣  | `git fetch --all --prune`                                  | Clean up local references to deleted remote branches.                                   |
| 8️⃣  | `git branch -a`                                            | Verify only `main` remains as the active branch.                                        |
| 9️⃣  | `git status`                                               | Confirm everything is clean and synced.                                                 |
| 🔟   | *(Optional)* `git config --global init.defaultBranch main` | Set `main` as the default branch name for all **future** repos you create.              |


✅ Final Check

| Command                                | Purpose                                       |
| -------------------------------------- | --------------------------------------------- |
| `git branch -vv`                       | Shows current branch and remote tracking info |
| `git remote show origin`               | Confirms remote `main` is set correctly       |
| `git log --oneline --graph --decorate` | Verifies history and branch alignment         |

