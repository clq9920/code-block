
//����һ����������������getLineNumbers���������顣��Ҫ��4�������ͷ��ƥ�䣬β��ƥ�䣬˫ƥ�䣬������ͨģʽ��
//��Ҫ����������һ�����飬������׸�Ԫ��Ϊ0�����Ԫ��Ϊ������-1
//����һ��ֱ���޸�ԭ����İ취��������û�п���ʲô��������������ϣ������ܹ�ʹ�÷���������İ취
export function  ProcessLineNumberArray(array:number[],FullTextLength:number) {
    if (array[0]==0) {
        if (array[array.length-1]==FullTextLength) {
            return array
        }
        else{
            array.push(FullTextLength)
        }
    }
    else{
        array.unshift(0);
        if (array[array.length-1]==FullTextLength) {
            return array
        }
        else{
            array.push(FullTextLength)
        }
    }
}

//����Ƭ��
var array=[1,2,3,4];

ProcessLineNumberArray(array,5);

console.log(array.toString())