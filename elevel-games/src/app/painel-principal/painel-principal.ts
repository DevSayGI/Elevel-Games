import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../servicos/produto.service';
import { CommonModule } from '@angular/common';




@Component({
selector: 'app-painel-principal',
imports: [CommonModule],
standalone: true,
templateUrl: './painel-principal.html',
styleUrls: ['./painel-principal.css']
})
export class PainelPrincipal implements OnInit {
produtos: any[] = [];
constructor(private produtoService: ProdutoService, private router: Router) {}
ngOnInit(): void {
this.listarProdutos();
}
listarProdutos() {
this.produtoService.obterProduto().subscribe((dados: any[]) => {
this.produtos = dados;
});
}
excluirProduto(id: number) {
if (confirm("Deseja realmente excluir este produto?")) {
this.produtoService.deletarProduto(id).subscribe(() => {
alert("Produto excluído com sucesso!");
this.listarProdutos();
});
}
}
editarProduto(id: number) {
this.router.navigate(['/cadastro-produto', id]);
}
}