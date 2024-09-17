import React from 'react';

export default function TablesPage() {
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tables</h1>
        {/* テーブルのコンテンツ */}
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
            <tr>
                <th className="py-2 px-4 border-b border-gray-300">Scale</th>
                <th className="py-2 px-4 border-b border-gray-300">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-2 px-4 border-b border-gray-300">0.1</td>
                <td className="py-2 px-4 border-b border-gray-300">Limited, small-scale information operations...</td>
            </tr>
            {/* 他のテーブル行を追加 */}
            </tbody>
        </table>
        </div>
    );
}

