#!/usr/bin/env bash
set -euo pipefail

AGENT_FILENAME="AGENTS.md"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

if [ "$#" -gt 1 ]; then
  echo "Usage: load_agents.sh [working-directory]" >&2
  exit 1
fi

TARGET_DIR="${1:-.}"
if [ "${TARGET_DIR#/}" != "$TARGET_DIR" ]; then
  WORKDIR="$TARGET_DIR"
else
  WORKDIR="$REPO_ROOT/$TARGET_DIR"
fi
WORKDIR="$(cd "$WORKDIR" && pwd)"

if [ ! -d "$WORKDIR" ]; then
  echo "Error: directory does not exist: $WORKDIR" >&2
  exit 1
fi

case "$WORKDIR/" in
  "$REPO_ROOT/"*) ;;
  *)
    echo "Error: working directory must be inside repository root: $REPO_ROOT" >&2
    exit 1
    ;;
esac

declare -a AGENT_FILES=()
declare -a ordered=()

current="$WORKDIR"

while true; do
  if [ -f "$current/$AGENT_FILENAME" ]; then
    AGENT_FILES+=("$current/$AGENT_FILENAME")
  fi

  [ "$current" = "$REPO_ROOT" ] && break

  parent="$(dirname "$current")"
  [ "$parent" = "$current" ] && break

  current="$parent"
done

if [ "${#AGENT_FILES[@]}" -eq 0 ]; then
  echo "No AGENTS.md files found." >&2
  exit 0
fi

# reverse array: root → leaf
for ((i=${#AGENT_FILES[@]}-1; i>=0; i--)); do
  ordered+=("${AGENT_FILES[i]}")
done

echo "### SYSTEM CONTEXT — CODEX AGENT INSTRUCTIONS"
echo

for file in "${ordered[@]}"; do
  rel="${file#$REPO_ROOT/}"
  echo "---"
  echo "# Instructions from $rel"
  echo
  sed '/^[[:space:]]*$/{$d;}' "$file"
  echo
done
