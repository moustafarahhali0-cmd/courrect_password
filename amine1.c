
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
