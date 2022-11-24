import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type RankingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerRanking = {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly type: string;
  readonly grupo: string;
  readonly puntos?: number | null;
  readonly tiempo?: number | null;
  readonly gema1?: boolean | null;
  readonly gema2?: boolean | null;
  readonly gema3?: boolean | null;
  readonly bonus1?: boolean | null;
  readonly bonus2?: boolean | null;
  readonly bonus3?: boolean | null;
  readonly intentos?: number | null;
  readonly status?: boolean | null;
  readonly avatar?: string | null;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRanking = {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly type: string;
  readonly grupo: string;
  readonly puntos?: number | null;
  readonly tiempo?: number | null;
  readonly gema1?: boolean | null;
  readonly gema2?: boolean | null;
  readonly gema3?: boolean | null;
  readonly bonus1?: boolean | null;
  readonly bonus2?: boolean | null;
  readonly bonus3?: boolean | null;
  readonly intentos?: number | null;
  readonly status?: boolean | null;
  readonly avatar?: string | null;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ranking = LazyLoading extends LazyLoadingDisabled ? EagerRanking : LazyRanking

export declare const Ranking: (new (init: ModelInit<Ranking, RankingMetaData>) => Ranking) & {
  copyOf(source: Ranking, mutator: (draft: MutableModel<Ranking, RankingMetaData>) => MutableModel<Ranking, RankingMetaData> | void): Ranking;
}