import random as rn



def style(w,a):
    letras = '<span style="--w: {}px; --a: {}px"></span>'.format(w,a)
    # letras = '<span style="--w: {}px; --a: {}px; --s: {}px; --d: {}px;">'.format(w,a,s,d)
    print (letras)


for x in range (100):
    numtop= rn.randint(1, 1000)
    # numbottom= rn.randint(1, 1000)
    numleft= rn.randint(1, 1000)
    # numright= rn.randint(1, 1000)
    style(numtop,numleft)
