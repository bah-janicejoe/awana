// import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
//
// import 'rxjs/add/operator/toPromise';
//
// @Injectable()
// export class UserService {
//   private headers = new Headers({'Content-Type': 'application/json'});
//   private userUrl = 'api/users';  // URL to web api
//   constructor(private http: Http) { }
//   getUsers(): Promise<User[]> {
//     return this.http.get(this.userUrl)
//                .toPromise()
//                .then(response => response.json().data as User[])
//                .catch(this.handleError);
//   }
//   getUser(id: number): Promise<User> {
//     const url = `${this.userUrl}/${id}`;
//     return this.http.get(url)
//       .toPromise()
//       .then(response => response.json().data as User)
//       .catch(this.handleError);
//   }
//   delete(id: number): Promise<void> {
//     const url = `${this.userUrl}/${id}`;
//     return this.http.delete(url, {headers: this.headers})
//       .toPromise()
//       .then(() => null)
//       .catch(this.handleError);
//   }
//   create(user: User): Promise<User> {
//     return this.http
//       .post(this.userUrl, JSON.stringify(user), {headers: this.headers})
//       .toPromise()
//       .then(res => res.json().data as User)
//       .catch(this.handleError);
//   }
//   update(User: User): Promise<User> {
//     const url = `${this.userUrl}/${User.id}`;
//     return this.http
//       .put(url, JSON.stringify(User), {headers: this.headers})
//       .toPromise()
//       .then(() => User)
//       .catch(this.handleError);
//   }
//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }
// }
//# sourceMappingURL=student.service.js.map