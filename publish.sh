#!/usr/bin/env bash
set -euo pipefail
REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"
TMP_WORKTREE="/tmp/gh-pages-$$"

if [ ! -d "$REPO_ROOT/deploy" ]; then
  echo "Error: deploy/ directory not found"
  exit 1
fi

echo "Creating worktree $TMP_WORKTREE ..."
# create worktree; if gh-pages exists, use it, otherwise create branch
if git show-ref --verify --quiet refs/heads/gh-pages; then
  git worktree add "$TMP_WORKTREE" gh-pages
else
  git worktree add -b gh-pages "$TMP_WORKTREE"
fi

rm -rf "$TMP_WORKTREE"/*
cp -r "$REPO_ROOT"/deploy/* "$TMP_WORKTREE"/

cd "$TMP_WORKTREE"

# ensure there's a commit if nothing changed
git add --all
if git diff --staged --quiet; then
  echo "No changes to deploy."
else
  git commit -m "Publish site to gh-pages"
  git push origin gh-pages --force
fi

cd "$REPO_ROOT"
# clean up
git worktree remove "$TMP_WORKTREE"

echo "Publish complete (pushed to gh-pages)."