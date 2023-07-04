arr1=[4,6,7,8]
arr2=[1,8,12]
arr3=[2,4,7,8,19,23]
for(let i=0;i<arr1.length;i++)
{
    for(let j=0;j<arr2.length;j++)
    {
        if(arr1[i]==arr2[j])
        {
            for(let x=0;x<arr3.length;x++)
            {
                if(arr3[x]==arr1[i])
                {
                    console.log(arr1[i])
                    break;
                }
            }
        }
    }
}