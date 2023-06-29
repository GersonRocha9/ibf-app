import { DocumentFile } from "../models/DocumentFile";

function getList(): DocumentFile[] {
  return [
    {
      id: "1",
      name: "Plano de Leitura Bíblica - Ordem Cronológica",
      thumbUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png",
      downloadLink: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      id: "2",
      name: "Plano de Leitura Bíblica - Infantil",
      thumbUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png",
      downloadLink:
        "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
    },
  ];
}

export const documentFileService = {
  getList,
};
