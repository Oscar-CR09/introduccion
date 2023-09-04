import PyPDF2

archivos = ["CERVANTES.pdf",
		"cERVANTES-COPIA.pdf"]

nombre_salida = "pdf_unido.pdf"

pdf_final = PyPDF2.PdfMerge()
for nombre_archivo in archivos:
    pdf_final.append(nombre_archivo)

pdf_final.write(nombre_salida)