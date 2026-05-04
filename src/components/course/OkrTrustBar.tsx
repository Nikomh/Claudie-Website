import { Award, Box, Clock, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { okrCoachContent } from "@/content/okrCoach";

const ICONS = { clock: Clock, award: Award, box: Box, message: MessageSquare };

export function OkrTrustBar() {
  const { trustBar } = okrCoachContent;

  return (
    <div className="border-y border-border bg-bg-section">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {trustBar.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Clock;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 px-4 py-7 text-center md:py-9"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tuerkis/10">
                  <Icon className="h-4 w-4 text-tuerkis" aria-hidden />
                </div>
                <p className="text-xl font-bold text-anthrazit md:text-2xl">{item.value}</p>
                <p className="text-xs leading-snug text-anthrazit-80">{item.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
