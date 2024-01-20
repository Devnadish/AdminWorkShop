"use client"
import React, { useEffect } from 'react'

function DisplayInvoice() {

    useEffect(() => {
      const navbar = document.getElementById('navmenu');
      if (navbar) {
        navbar.style.display = 'none';
      }
    }, []);
  return (
      <section className="rounded border px-16 py-3 mt-1 text-xl font-bold">
      فاتورة
    </section>
  )
}

export default DisplayInvoice
