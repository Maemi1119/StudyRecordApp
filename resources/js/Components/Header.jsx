import React from 'react';

export default function Header({ children }) {
    return (
        <div className="bg-[#FFEBCD] h-24">
            <h1 className="text-4xl pl-10 leading-[96px] font-bold">{children}</h1>
        </div>
    );
}