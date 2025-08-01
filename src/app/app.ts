import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
 
  constructor(private router:Router){

  }
  userLoggedIn=false;
  userName="Shreyash"
  userProfilePhoto="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAM1BMVEXk5ueutLenrrHg4uTn6eqqsLTq7O28wcPT1tjKztDO0tS0ubzc3+DFycu4vcDY292jqa6pBvTAAAAEWklEQVR4nO2c2U7sMAxAm8TZl/L/X3vToQMMzJLFjTNXPRIC8XRkObvdZTk5OTk5OTk5OTk5OTn5D4EL1BbFbKoirMbGjFvF/q+5gSWYqBnnXG7kX0xbI+YWV8JpzyS7RTIfzaKo5R6hVPTsIVFNGnHLf8f5JubcLtOJw+L8M+kN7s1kOQ6LfuH8meRRzOSt1idJfYMPE3nbV/nxHXDuqGW/iMXWGW7niDdUWeeAT+Fda52x1M5LZYZ8wh11vMHVW2fvldYbQoP0Bu38rUrn698kSmsoWRvvIiNduMG0WuflciXTLtqIPAq3JrM2LbPIFU4W7g7pDZrzDhjeZS0NyahsnvyuJAptCD2ZfYFirVQd08gOxdwtenMkZ0kYbg2u25oiSyD2W/PxG2+RukdkzhIx2BqKz+pPGWyd1xqEYDM+fEw2nWp+I4ffPjQcIe9ox9H7kv7FZiON1k4o2qN3gQLHerg2Rmrn5B69TOJo88HaSNEerf2m0e49R+4Mz22ULcn4Y/DLB6Y5td90lXzTPYnruyTZtc1g6zfdb0N4y9PNIjDG5PhbV5ST+/in1Z4r+S8obtMQbqVG3zdkVP/MTfEcjHDjSlLt0H2/rUmu5WHtWyipHm/aXyUvDN9GXela4OX4y+0rut1bRjJrWDuiTRfsRdlma9KSEmi9nKdLkYt2+FPRWgZxAWbbUzAnrwZs2gkS1xxdvMtrF69MUcEIti5PJHld2k7VKf6DprDhDlWvfeSj8RsIhfO31BNZZ29RNDDzmXcm643Vv8pwPlXx9g4o8/wW1q9zNoPA4jSTd9Ul026yvoQfwLLa9Eecy2TX6ZL6hiwXjGYf/NLMIjn/yHEOy9zSO0opEYxxxgSR/6bWKeSzd09tvEUbX1aFRayrcc5eGvistTnkaxAwadA34+Bi8veXeZ90HpVqorayS3+ksYl/PF9uti5EFs128iWXBxCriYk9bYK7nQz91vtJmu9qWaP29xeYZ2FnSTsqc1Ah/m3pLDTPP8mMH6V5wnCs84lPcj127cxruO6V/hRPZtimEBarG5PjjnmKYUSu5P0pmvNOPLy9GRaDkR2/4PHQt6ec0wlfmm0ziz2uWwtCxM6Pb/F01D2Ewig0f+zN9BEpDuKApL7liLfsQ0O9g32LUtbGjuDtDWKiAFYd2mtv5tC8cSp1CuFYNSbQ/q7UgtQoU3jHa1ijd0LYFyLUX1Tju70bmu8xvHvzpP5hBgPZV9eD0jjW5t0RboQCnWZv3Tx/A1JJfJt3eyEVUpNKI407WZpJ5JvGYdlTLIJB4/cSiK3bPgcC8ehTQQHV2qSzyJX6NEFoB0egdpHvKt7Cozbc1JPflbp34+ZP6mBT2XWL0umLga/SHnXkfUnV3N1ZK4xIzU5wlgG5UdHjp6hdfyDLq7zFNDnCtk97lubINPPIhi/NkjkW9iu+dNvd3SuBSvnnvqbSLq70nmMb9UXpWXiVfCaKd4FiLu4Y/gOfGzwLV4eDzQAAAABJRU5ErkJggg==";

  user:any;
    ngOnInit() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.userLoggedIn=true;
      this.userName=this.user.name;
      this.userProfilePhoto=this.user.picture;
      console.log(this.user)

    }
  }

  logout() {
  localStorage.removeItem("user");

  this.router.navigateByUrl("welcome").then(() => {
    window.location.reload();
  });
}

}
