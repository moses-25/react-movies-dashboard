# Linking a Local Git Project to a Remote GitHub Repository

## Prerequisites
- Git installed locally
- A GitHub account
- SSH key added to your GitHub account (or use HTTPS)

## Steps

1. **Initialize the repository (if not already done)**
   ```bash
   git init
   ```

2. **Make an initial commit**
   ```bash
   git add .
   git commit -m "initial commit"
   ```

3. **Create a repository on GitHub**
   - Go to https://github.com/new
   - Do NOT initialize with README, .gitignore, or license (to avoid conflicts)

4. **Add the remote origin**
   ```bash
   git remote add origin git@github.com:<username>/<repo>.git
   ```

5. **Pull remote changes (if the remote has existing commits)**
   ```bash
   git pull --rebase origin main
   ```

6. **Push to the remote repository**
   ```bash
   git push -u origin main
   ```

## If Push Is Rejected
If you see `! [rejected]` because the remote contains work you don't have locally:

```bash
git pull --rebase origin main
git push -u origin main
```

## Verification
```bash
git remote -v
git log --oneline
```
