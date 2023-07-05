arr=[7,0,8,5,0,2]
var count=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==0)
    {
        count++
        for(let j=i;j>0;j--)
        {
            let c=arr[j-1]
            arr[j-1]=arr[j]
            arr[j]=c
        }
    }
}
console.log(arr)
console.log("count is "+count)