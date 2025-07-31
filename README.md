# TechTest
# 📝 Task Manager - Application de gestion de tâches

##  Description

Ce projet est une application fullstack de gestion de tâches, développée dans le cadre d'un test technique pour un poste de **Développeur Fullstack (React + TypeScript)**.

Elle permet à une équipe interne de :
- Ajouter des tâches
- Consulter la liste des tâches
- Supprimer des tâches
- (Bonus) Mettre à jour leur statut (`pending` / `done`)

---

##  Stack Technique

### Backend
- **Node.js + Express**
- **TypeScript**
- Données stockées en mémoire (`Array`)
- Architecture en **controller / service / model / types**
- API REST

###  Frontend
- **React**
- **TypeScript**
- **Material UI (MUI)** pour une interface simple et propre
- Gestion locale de l'état avec `useState` / `useEffect`
- API isolée dans `taskApi.ts`

---

## 📂 Structure du projet

task-manager/
├── backend/
├── src/
│ ├── Controllers/
│ ├── Models/
│ ├── Routes/
│ ├── Services/
│ ├── Types/
│ └── index.ts

├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── types/
│ │ ├── Hooks/
│ │ └── App.tsx

##  Lancer le projet

### 1. Backend (Express)

```bash
cd backend
npm install
npm run dev
## Le serveur tourne sur http://localhost:3001
```
### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
## L'application s'ouvre sur http://localhost:3000

