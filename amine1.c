/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int password=123456;
    int user;
    printf("enter your password ?\n");
    scanf("%d",&user);
    while(user!=password){
        printf("enter your password please ?\n");
        scanf("%d",&user);
        
    }
    printf("welcome to your account");

    return 0;
}