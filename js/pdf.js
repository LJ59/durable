window.onload = function() {
    document.getElementById("generePDF").addEventListener("click", () => {
        const imprime = this.document.getElementById("imprime");
        var opt = {
            margin: 1,
            filename: '10engagements_pour_un_nord_durable.pdf',
            pagebreak: { mode: 'avoid-all', before: '#engagement1' },
            image: { type: 'jpeg', quality: 0.98 },
            enableLinks: 'true',
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(imprime).set(opt).save();
    })

}