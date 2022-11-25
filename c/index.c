#include<stdio.h>
void main()
{
    int x=10,y=11,z=8;
    int s=++x + y-- +z++;
    printf("%d",s);
}