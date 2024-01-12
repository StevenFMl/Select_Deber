import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istock } from '../Interface/istock';



@Injectable({
  providedIn: 'root'
})
export class StockService {
  private urlBase: String = 'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op='
  constructor(private cliente: HttpClient) { }

  todos(): Observable<Istock[]> {
    return this.cliente.get<Istock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<Istock> {
    var sotcks = new FormData();

    return this.cliente.post<Istock>(this.urlBase + 'uno', sotcks);
  }

  insertar(proveedor: Istock): Observable<any> {
    var prov = new FormData();
    prov.append("ProductoId", proveedor.ProductoId.toString());
    prov.append("ProveedorId", proveedor.ProveedorId.toString());
    prov.append("Cantidad", proveedor.Precio_Venta.toString());
    prov.append("Precio_Venta", proveedor.Cantidad.toString());

    return this.cliente.post(this.urlBase + 'insertar', prov);

  }
  actualizar(proveedor: Istock): Observable<any> {
    var prov = new FormData();
    prov.append('id', proveedor.StockId.toString());
    prov.append("ProductoId", proveedor.ProductoId.toString());
    prov.append("ProveedorId", proveedor.ProveedorId.toString());
    prov.append("Cantidad", proveedor.Precio_Venta.toString());
    prov.append("Precio_Venta", proveedor.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prov);
  }









}