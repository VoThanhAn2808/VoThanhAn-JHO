import { useState } from "react";
import { Mail, Phone, Trash2, Edit, Link as Settings } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Acctions } from "../ui/acctions";
import data from "../../data/dataTable.json";

type Contact = {
    name: string;
    role: string;
    email: string;
    phone: string;
    opportunity: string;
    responsible: string;
    tags: string[];
};

export default function TableContact() {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);

    return (
        <Card className="bg-[#17202E] text-white w-full rounded-2xl overflow-hidden">
            <CardContent className="overflow-x-auto p-0">
                <table className="min-w-full text-sm table-fixed border-collapse">
                    <thead className="text-gray-400 text-xs border-b border-[#2C313A]">
                        <tr>
                            {["", "Nom du contact", "Email", "Téléphone", "Opportunity", "Responsable", "Étiquettes", ""].map((header, index) => (
                                <th
                                    key={index}
                                    className={`p-4 ${index !== 7 ? "border-r border-[#2C313A]" : ""
                                        }`}
                                >
                                    {header || <Settings size={16} className="mx-auto" />}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((contact: Contact, idx: number) => {
                            const isSelected = selectedRow === idx;
                            const isLastRow = idx === data.length - 1;
                            return (
                                <tr
                                    key={idx}
                                    onClick={() => setSelectedRow(idx)}
                                    className={`cursor-pointer ${isSelected ? "bg-[#2A2F3A]" : "hover:bg-[#1F242D]"
                                        }`}
                                >
                                    {/* Checkbox */}
                                    <td className={`p-4 ${!isLastRow ? "border-b" : ""} border-[#2C313A] text-center border-r`}>
                                        <input type="checkbox" className="accent-blue-500" />
                                    </td>

                                    {/* Name + Role */}
                                    <td className={`p-4 ${!isLastRow ? "border-b" : ""} border-[#2C313A] border-r flex justify-center`}>
                                        <div className="flex flex-col">
                                            <span className="font-semibold">{contact.name}</span>
                                            <span className="text-xs text-gray-400">{contact.role}</span>
                                        </div>
                                    </td>

                                    {/* Email */}
                                    <td className={`p-4 ${!isLastRow ? "border-b" : ""} border-[#2C313A] border-r`}>
                                        <div className="flex items-center justify-center gap-2 h-full">
                                            <Mail size={14} className="text-gray-400" /> {contact.email}
                                        </div>
                                    </td>

                                    {/* Phone */}
                                    <td className={`p-4 ${!isLastRow ? "border-b" : ""} border-[#2C313A] border-r `}>
                                        <div className="flex items-center justify-center gap-2 h-full">
                                            <Phone size={14} className="text-gray-400" /> {contact.phone}
                                        </div>
                                    </td>

                                    {/* Opportunity */}
                                    <td className={`p-4 text-center align-middle ${!isLastRow ? "border-b" : ""} border-[#2C313A] border-r `}>
                                        {contact.opportunity}
                                    </td>

                                    {/* Responsible */}
                                    <td className={`p-4 text-center align-middle ${!isLastRow ? "border-b" : ""} border-[#2C313A] border-r `}>
                                        {contact.responsible === "Me" ? (
                                            <span className="bg-green-700 text-xs px-3 py-1 rounded-full inline-flex items-center">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                                Me l'assigner
                                            </span>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2 h-full">
                                                <img
                                                    src="https://ui-avatars.com/api/?name=Sébastien&background=random&size=32"
                                                    alt="avatar"
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                <span>{contact.responsible}</span>
                                            </div>
                                        )}
                                    </td>

                                    {/* Tags */}
                                    <td className={`p-4 ${!isLastRow ? "border-b" : ""} border-[#2C313A] border-r`}>
                                        <div className="flex items-center justify-center gap-2 h-full">
                                            {contact.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${tag === "BTP" ? "bg-red-500" : "bg-blue-500"
                                                        }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            <span className="text-xs text-gray-400">+1</span>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className={`p-4 ${!isLastRow ? "border-b" : ""} border-[#2C313A] text-center w-20`}>
                                        <div className={`flex justify-center gap-2 transition-opacity duration-300 ${isSelected ? "opacity-100" : "opacity-0"}`}>
                                            <Acctions variant="ghost" size="icon">
                                                <Edit size={14} />
                                            </Acctions>
                                            <Acctions variant="ghost" size="icon" className="hover:text-red-500">
                                                <Trash2 size={14} />
                                            </Acctions>
                                        </div>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardContent>
        </Card>
    );
}