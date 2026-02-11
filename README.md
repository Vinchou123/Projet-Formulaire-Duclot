# Projet Formulaire Duclot

Application web interne pour l'onboarding, crossboarding et offboarding des employés Duclot.

## Stack
- Frontend: React (Vite)
- Backend: Node.js (Express)
- Base de données: PostgreSQL
- Auth: Microsoft 365 (Azure Entra ID / MSAL)
- Email: Microsoft Graph
- PDF: pdf-lib

## Structure
- frontend/: application React
- backend/: API Express
- backend/sql/: schéma SQL PostgreSQL

## Prérequis
- Node.js 18+
- PostgreSQL 14+
- Un app registration Azure Entra ID (Microsoft 365)

## Démarrage rapide

### 1) Base de données
Créer une base PostgreSQL puis exécuter:

```
psql -d duclot_formulaire -f backend/sql/schema.sql
```

### 2) Backend

```
cd backend
cp .env.example .env
npm install
npm run dev
```

### 3) Frontend

```
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Variables d'environnement
Voir `backend/.env.example` et `frontend/.env.example`.

## Fonctionnalités MVP
- Formulaire unique (Onboarding/Crossboarding/Offboarding)
- Historique par employé
- Suivi matériel et comptes
- Notifications email
- Export PDF
- Interface FR/EN (toggle)