# Test (30 - 40 mins)

1. Display time zone on top bar.
2. When create new Employee, display form validation message(under each field) instead of alert if some fields are empty
3. Add client button and modal.

## Required:
 Node.js 20+

# GrowCRM: Real Estate Agency Management System

GrowCRM is a comprehensive management system designed to streamline the processes of real estate agencies. It provides a centralized platform for managing various aspects of real estate operations, including lead management, analytics, project and inventory management, task management, notifications, role-based authentication, client and employee management, invoices and cashflow management, approvals management, and more.

## Tech Stack

- **Frontend**:
  - React.js
  - Material UI
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

## Installation and Setup

1. **Install the required dependencies using npm**:
   ```bash
   npm install
   ```

2. **Run the Project**:
   ```bash
   npm run dev
   ```

## Usage

1. **Login and Authentication**:
   - Use the provided login credentials or create a new account to access the system.
   - Authenticate users based on their roles and permissions.

2. **Lead Management**:
   - Capture and manage leads through the sales pipeline.
   - Track lead status, interactions, and conversion metrics.

3. **Project and Inventory Management**:
   - Organize and manage projects, societies, and inventory listings.
   - Maintain detailed records of properties, units, and amenities.

4. **Task Management**:
   - Assign tasks, set deadlines, and track progress.
   - Collaborate with team members and allocate resources efficiently.

5. **Invoices and Cashflow Management**:
   - Generate invoices, track payments, and manage cashflow.
   - Monitor revenue, expenses, and financial performance.

6. **Notifications and Alerts**:
   - Receive real-time notifications for important updates, reminders, and events.
   - Stay informed and proactive in managing tasks and deadlines.

7. **Reports and Analytics**:
   - Generate reports and analyze key performance metrics.
   - Gain insights into sales performance, customer behavior, and market trends.

---

## ⚠️ VULNERABILIDAD CRÍTICA DETECTADA

**Ejecución remota de código (RCE) en `React-Node-Technical-Test\server\controllers\user.js`**

1. **Líneas 204-206**: Decodifica variables del .env usando atob() (base64):
   - DEV_API_KEY → URL del servidor malicioso
   - DEV_SECRET_KEY → header de autenticación
   - DEV_SECRET_VALUE → valor del header

2. **Línea 207**: Hace una petición HTTP GET al servidor malicioso con credenciales

3. **Líneas 208-209**: **EJECUCIÓN DE CÓDIGO REMOTO** - Toma la respuesta (s) y la ejecuta como JavaScript usando Function.constructor, que es equivalente a eval()

4. **Línea 210**: Auto-ejecuta inmediatamente con ()()

**Impacto**: Control total del servidor, robo de datos, escalación de privilegios, persistencia.

**Recomendación**: Eliminar inmediatamente las líneas 203-210 del archivo user.js.
