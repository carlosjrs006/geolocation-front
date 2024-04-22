import { Component } from '@angular/core';
import { ConsultaEnderecoServices } from 'src/app/shared/services/consulta-endereco.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historico-consultas',
  templateUrl: './historico-consultas.component.html',
  styleUrls: ['./historico-consultas.component.scss']
})
export class HistoricoConsultasComponent {

  responseConsultaEnderecoList: any;

  totalPages:any;
  pageSize: number = 10;
  currentPage: number = 1;

  constructor(private consultaEnderecoService: ConsultaEnderecoServices){

  }

  ngOnInit() {
    this.consultaEnderecoService.getHistoricoConsultas(0,this.pageSize).subscribe((res) =>{
      this.responseConsultaEnderecoList = res.content;
      this.totalPages = Array.from({ length: res.totalPages }, (_, i) => i + 1);
    },(error:any)=>{
      Swal.fire({
        icon: "error",
        title: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
        timer: 3000,
        showConfirmButton: false,
      })
    })
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.consultaEnderecoService.getHistoricoConsultas(( page - 1), this.pageSize).subscribe((res) => {
      this.responseConsultaEnderecoList = res.content;
      this.totalPages = Array.from({ length: res.totalPages }, (_, i) => i + 1);
    },(error:any)=>{
      Swal.fire({
        icon: "error",
        title: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
        timer: 3000,
        showConfirmButton: false,
      })
    });
  }


}
