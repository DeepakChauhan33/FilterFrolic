import React from 'react'

const Footer = () => {
  return (
    <footer className='flex text-[14px] flex-col md:flex-row justify-around items-start bg-gray-900 text-white p-5 space-y-5 md:space-y-0'>
        <div className=''>
            <span className='text-yellow-400 text-sm p-2.5'>
                Eassy Access
            </span>

            <ul>
                <li>Home</li>
                <li>Sitemap</li>
                <li>Requirements</li>
                <li>Right to Information</li>
                <li>Tenders</li>
                <li>Dashboard</li>
            </ul>
        </div>



        <div>
            <span className='text-yellow-400 text-sm p-2.5'>
                DOP Links
            </span>

            <ul>
                <li>Grievance Management</li>
                <li>IPPB</li>
                <li>Requirements</li>
                <li>Dak Ghar Niryat Portal</li>
                <li>Buy Stamps</li>
                <li>Netbanking</li>
            </ul>
        </div>

         <div>
            <span className='text-yellow-400 text-sm p-2.5'>
                Employee Corner
            </span>

            <ul>
                <li>Internal Portal</li>
                <li>Self Service Portal</li>
                <li>Dak Karmayogi Portal</li>
                <li>Utilities</li>
            </ul>
        </div>


        <div>
            <span className='text-yellow-400 text-sm p-2.5'>
               External Links
            </span>

            <ul>
                <li>The National Portal of India</li>
                <li>National Voters Service Portal India Code</li>
                <li>Application Security Audit Report</li>
                
            </ul>
        </div>


    </footer>
  )
}

export default Footer
