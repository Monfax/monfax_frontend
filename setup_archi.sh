#!/bin/bash

# Liste des dossiers à créer
folders=(
  "src/app/core/guards"
  "src/app/core/services"
  "src/app/features"
 "src/app/shared"
)

# Boucle pour créer les dossiers et y ajouter un .gitkeep
for folder in "${folders[@]}"
do
  mkdir -p "$folder"
  touch "$folder/.gitkeep"
  echo "✅ Créé : $folder"
done

echo "🎉 Tous les dossiers ont été créés avec un fichier .gitkeep"


