
//����һ����������������getLineNumbers���������顣��Ҫ��4�������ͷ��ƥ�䣬β��ƥ�䣬˫ƥ�䣬������ͨģʽ��
//��Ҫ����������һ�����飬������׸�Ԫ��Ϊ0�����Ԫ��Ϊ������-1

import { arch } from "os";

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


// ����һ��������ȷ��������ڵ�����
//һ�����̫�ѱ�д�ˣ�����ٶ����ǲ���ѷָ����������У������п��ܷ������һ��
//���Ҽٶ����������зָ��а���һ��
//������дһ�������Ƿ��Ѿ����ַָ������Ƿ��׶Ρ��Ƿ����һ�С��Ƿ�ָ�����
export function Interval(array:number[],CursorLine:number) {
    //�ж��Ƿ��Ѿ����ַָ���
    if (array.length<3){
        //�����û�г��ַָ���
        return array
    }
    //����Ѿ������˷ָ���
    else{
        //�Ƿ��׶�
        if(CursorLine<array[2]){
            //������׶εĻ�
            return [array[0],array[1]];
        }
        else{
            //��������׶εĻ�
            //��ʼѭ������õ�һ��index
            var index=0;
            while(array[index]<CursorLine){
                index++
            }
            //��ʱ��indexһ���Ǵ���1��
            //�ж��Ƿ�ָ���
            if (CursorLine==array[index]){
                //����Ƿָ��еĻ�,�����ж��Ƿ������һ��
                return [array[index],array[index]]
            }
            //������Ƿָ��еĻ�
            else{
                //�ж��Ƿ����һ��
                if (index==array.length-1) {
                    //��������һ�У���ô�������Ϊ�����һ����
                    return [array[index-1]+1,array[index]]
                }
                else{
                    //����������һ�У�������һ�񽫻��Ϊ�����һ����
                    return [array[index-1]+1,array[index]-1]
                }
            }
        }
    }

    }

