"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Search, 
  Plus, 
  Edit3, 
  Trash2,
  ExternalLink,
  Briefcase
} from "lucide-react";

const initialCompanies = [
  { id: "1", name: "Skytech Integrated Network Ltd.", role: "Fullstack Engineer", status: "Past", duration: "Jun 2022 - Jul 2023", location: "Nasarawa, Nigeria", url: "" },
  { id: "2", name: "Decentralized Future", role: "Smart Contract Developer", status: "Past", duration: "Jan 2024 - Dec 2024", location: "Remote", url: "https://example.com" },
  { id: "3", name: "Arewa Protocol", role: "Lead Architect", status: "Current", duration: "Jan 2025 - Present", location: "Remote", url: "https://arewa.io" },
];

export default function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState(initialCompanies);

  const filtered = companies.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif text-gray-900">Work Experience</h1>
          <p className="text-sm text-gray-500 mt-1">Manage the companies and roles displayed on your resume.</p>
        </div>
        <div className="flex w-full sm:w-auto">
          <Link 
            href="/dashboard/companies/new"
            className="flex w-full justify-center items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Company
          </Link>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text"
            placeholder="Search companies or roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all"
          />
        </div>
        <div className="w-full sm:w-auto">
          <select className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-gray-400">
            <option value="all">All Roles</option>
            <option value="current">Current</option>
            <option value="past">Past</option>
          </select>
        </div>
      </div>

      {/* Mobile Company List (Card View) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filtered.map(company => (
          <div key={company.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-gray-500" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">{company.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{company.role}</p>
                </div>
              </div>
              <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded-md shrink-0 ${
                company.status === 'Current' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'
              }`}>
                {company.status}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
              <Briefcase className="w-3.5 h-3.5" />
              {company.duration} &middot; {company.location}
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
               {company.url && (
                <a href={company.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Link
                </a>
              )}
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Edit3 className="w-3.5 h-3.5" />
                Edit
              </button>
              <button className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-lg shadow-sm ml-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-sm text-gray-500">
            No work experience found.
          </div>
        )}
      </div>

      {/* Desktop Company List (Table View) */}
      <div className="hidden md:block bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(company => (
              <tr key={company.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{company.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{company.role} &middot; {company.location}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md ${
                    company.status === 'Current' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {company.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500 whitespace-nowrap">{company.duration}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {company.url && (
                      <a href={company.url} target="_blank" rel="noreferrer" className="p-1.5 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button className="p-1.5 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-red-50 hover:border-red-100 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  No work experience found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
