import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
            МЁРТВЫЕ ДУШИ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light italic">
            Коллекционная нумизматическая монета
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Icon name="Calendar" size={16} />
            <span>1842</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative perspective-1000">
            <div 
              className={`relative transition-all duration-800 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className={`p-8 md:p-12 bg-card border-2 border-primary/20 shadow-2xl transition-opacity ${!isFlipped ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl group-hover:blur-2xl transition-all" />
                      <img 
                        src="https://cdn.poehali.dev/projects/212b4d80-9831-40e4-82e0-26927416d076/files/38226333-36be-4fd6-af93-ccde68d06737.jpg"
                        alt="Аверс монеты"
                        className="relative w-full rounded-full shadow-2xl ring-4 ring-primary/30 hover:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-3">Аверс</h2>
                      <p className="text-foreground/90 leading-relaxed">
                        Портрет <span className="font-semibold text-primary">Павла Ивановича Чичикова</span> в профиль, 
                        выполненный в классическом стиле царских монет. Благородное выражение лица, 
                        респектабельный фрак — образ предприимчивого героя гоголевской поэмы.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary/50 pl-4 py-2 bg-primary/5 rounded-r">
                      <p className="text-sm text-muted-foreground italic">
                        «Павел Иванович Чичиков. Мёртвые души»
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Award" size={16} className="text-primary" />
                      <span>Год чеканки: 1842</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className={`p-8 md:p-12 bg-card border-2 border-primary/20 shadow-2xl absolute inset-0 transition-opacity ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                   style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl group-hover:blur-2xl transition-all" />
                      <img 
                        src="https://cdn.poehali.dev/projects/212b4d80-9831-40e4-82e0-26927416d076/files/f019f45c-4169-47ed-bf94-3da92e73d4be.jpg"
                        alt="Реверс монеты"
                        className="relative w-full rounded-full shadow-2xl ring-4 ring-primary/30 hover:ring-primary/50 transition-all"
                        style={{ transform: 'scaleX(-1)' }}
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-3">Реверс</h2>
                      <p className="text-foreground/90 leading-relaxed">
                        Пергаментный свиток с надписью <span className="font-semibold">«Ревизские души»</span>. 
                        Из него вылетает стая птиц — метафора упокоенных душ. 
                        На горизонте — русская тройка, уносящаяся в бескрайние дали.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary/50 pl-4 py-2 bg-primary/5 rounded-r">
                      <p className="text-sm text-muted-foreground italic">
                        «Русь, куда ж несёшься ты?»
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Coins" size={16} className="text-primary" />
                      <span>Номинал: 1 ДУША</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              onClick={handleFlip}
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="RotateCw" size={20} />
              Перевернуть монету
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="p-8 bg-card/50 border-primary/20 backdrop-blur">
            <div className="flex items-start gap-4">
              <Icon name="Scroll" size={32} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Гурт монеты</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Рифлёное ребро с повторяющейся надписью: 
                  <span className="block mt-2 font-mono text-sm text-primary/80 tracking-wider">
                    «ПОКУПАЮ МЁРТВЫЕ ДУШИ...»
                  </span>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex items-start gap-4">
              <Icon name="BookOpen" size={32} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">О монете</h3>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Уникальная памятная монета посвящена величайшей поэме Николая Васильевича Гоголя 
                  «Мёртвые души», опубликованной в 1842 году. Монета воплощает дух эпохи, 
                  авантюрный замысел Чичикова и философский вопрос о судьбе России.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Выполнена в стиле царских монет XIX века с благородной патиной 
                  и тщательной проработкой деталей гравировки.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-16 text-muted-foreground text-sm">
          <p>Коллекционная монета • Ограниченный тираж</p>
        </div>
      </div>
    </div>
  );
};

export default Index;