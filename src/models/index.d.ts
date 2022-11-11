import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type RankingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerRanking = {
  readonly id: string;
  readonly username?: string | null;
  readonly password?: string | null;
  readonly nombre?: string | null;
  readonly grupo?: string | null;
  readonly puntos?: number | null;
  readonly tiempo?: number | null;
  readonly bonus1?: boolean | null;
  readonly bonus2?: boolean | null;
  readonly bonus3?: boolean | null;
  readonly completado?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRanking = {
  readonly id: string;
  readonly username?: string | null;
  readonly password?: string | null;
  readonly nombre?: string | null;
  readonly grupo?: string | null;
  readonly puntos?: number | null;
  readonly tiempo?: number | null;
  readonly bonus1?: boolean | null;
  readonly bonus2?: boolean | null;
  readonly bonus3?: boolean | null;
  readonly completado?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ranking = LazyLoading extends LazyLoadingDisabled ? EagerRanking : LazyRanking

export declare const Ranking: (new (init: ModelInit<Ranking, RankingMetaData>) => Ranking) & {
  copyOf(source: Ranking, mutator: (draft: MutableModel<Ranking, RankingMetaData>) => MutableModel<Ranking, RankingMetaData> | void): Ranking;
}