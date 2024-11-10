import React from 'react'
import AdminNavbar from './components/AdminNavbar'

const AdminLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
  return (
    <>
        <div className="flex h-screen bg-gray-100">
            <AdminNavbar />
			{/* Main Content */}
			<main className="flex-1 overflow-x-hidden overflow-y-auto">
                {children}
            </main>
        </div>
    </>
  )
}

export default AdminLayout